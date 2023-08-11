import requests
import time
import csv

def fuzz_test(query, total_queries, delay):
    count = 0
    question = query
    stats = {}
    response_times = []  # List to store response times

    print(f"Initiating test {total_queries} times...")
    for _ in range(total_queries):
        try:
            start_time = time.time()
            response = requests.post("https://chatbot-mgn7slqt5a-as.a.run.app/chatbot/query", json={'question': question})
            end_time = time.time()
            response_time = end_time - start_time
            response_times.append(response_time)  # Add response time to list
            chatbot_response = response.json().get('ai_response')

            count += 1
            print(f"Test {count}")
            print(f"Query: {question}")
            print(f"Response Time = {response_time}")
            print(f"Response: {chatbot_response}\n")

            # update stats
            if chatbot_response in stats:
                stats[chatbot_response] += 1
            else:
                stats[chatbot_response] = 1

            # set interval between tests
            time.sleep(delay)

        except Exception as e:
            print(f"Fuzz test failed at Test {count + 1}")
            print(f"Status Code: {response.status_code} - {response.reason}")
            print(e)
            return

    print(f"\nFuzz test passed with {count} queries")

    avg_response_time = sum(response_times) / len(response_times)  # Calculate average response time
    print(f"Average Response Time: {avg_response_time}\n")  # Print average response time

    print("\nGenerating fuzzer_report.csv...")
    # Saving to CSV
    with open("fuzzer_report.csv", "w", newline='') as csvfile:
        writer = csv.writer(csvfile)
        
        # Write total number of queries
        writer.writerow(["Total Queries", total_queries])
        
        # Write the query message
        writer.writerow(["Query", question])
        writer.writerow([])  # Empty row for separation
        
        # Write average response time
        writer.writerow(["Average Response Time", avg_response_time])
        writer.writerow([])  # Empty row for separation
        
        # Write headers for stats
        writer.writerow(["Response", "Frequency", "Consistency"])
        
        # Write the stats
        for response, frequency in stats.items():
            percentage = (frequency / total_queries) * 100
            writer.writerow([response, frequency, f"{percentage:.2f}%"])

    print("Done")

# run the function
query = input("What is your query that you want to test?\n")
total_queries = int(input("Set number of tests (enter an integer)\n"))
delay = float(input("Set interval between tests in seconds\n"))
fuzz_test(query, total_queries, delay)
