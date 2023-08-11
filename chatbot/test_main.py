import pytest
from main import app


# Set the app to testing mode
app.config['TESTING'] = True


@pytest.fixture
def client():
    with app.test_client() as client:
        yield client


def test_query_valid_input(client):
    input_data = {
        'question': 'What is faith?'
    }

    response = client.post('/chatbot/query', json=input_data)

    assert response.status_code == 200
    assert 'ai_response' in response.get_json()


def test_chatbot_identity(client):
    input_data = {
        'question': 'What is your name?'
    }

    response = client.post('/chatbot/query', json=input_data)
    response_data = response.get_json()

    assert response.status_code == 200
    assert 'Kampung Kaki' in response_data['ai_response']


def test_query_missing_input(client):
    response = client.post('/chatbot/query', json={})
    assert response.status_code == 400


def test_query_empty_input(client):
    response = client.post('/chatbot/query', json={'question': ''})
    assert response.status_code == 400


def test_query_non_string_input(client):
    response = client.post('/chatbot/query', json={'question': 123})
    assert response.status_code == 400


def test_query_non_json_input(client):
    response = client.post('/chatbot/query', data='This is not JSON')
    assert response.status_code == 400


def test_query_extra_fields(client):
    input_data = {
        'question': 'What is faith?',
        'extra_field': 'This should be ignored'
    }

    response = client.post('/chatbot/query', json=input_data)

    assert response.status_code == 200
    assert 'ai_response' in response.get_json()


def test_query_other_languages(client):
    input_data = {
        'question': '信仰とは何ですか？'
    }

    response = client.post('/chatbot/query', json=input_data)

    assert response.status_code == 200
    assert 'ai_response' in response.get_json()