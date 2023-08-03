import pytest
from main import app


# Set the app to testing mode
app.config['TESTING'] = True


@pytest.fixture
def client():
    with app.test_client() as client:
        yield client


def test_query_valid_input(client):
    # Given
    input_data = {
        'question': 'What is faith?'
    }

    # When
    response = client.post('/chatbot/query', json=input_data)

    # Then
    assert response.status_code == 200
    assert 'ai_response' in response.get_json()


def test_chatbot_identity(client):
    # Given
    input_data = {
        'question': 'What is your name?'
    }

    # When
    response = client.post('/chatbot/query', json=input_data)
    response_data = response.get_json()

    # Then
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
    # Given
    input_data = {
        'question': 'What is faith?',
        'extra_field': 'This should be ignored'
    }

    # When
    response = client.post('/chatbot/query', json=input_data)

    # Then
    assert response.status_code == 200
    assert 'ai_response' in response.get_json()


def test_query_other_languages(client):
    # Given
    input_data = {
        'question': '信仰とは何ですか？'
    }

    # When
    response = client.post('/chatbot/query', json=input_data)

    # Then
    assert response.status_code == 200
    assert 'ai_response' in response.get_json()


# def test_chatbot_interfaith_focus(client):
#     # Given
#     input_data = {
#         'question': 'What is java?'
#     }

#     # When
#     response = client.post('/chatbot/query', json=input_data)
#     response_data = response.get_json()

#     # Then
#     assert response.status_code == 200
#     assert 'interfaith focus' in response_data['ai_response']