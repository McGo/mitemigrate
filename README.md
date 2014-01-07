# mitemigrate

## Description

migrate mite data from one account to another. The script will create all projects, clients and the corresponding time entries on the destination account that have also been entered on the source account. The migration will be done in three steps:

1. Data assembly

DESC

2. Data configuration

DESC

3. Data creation

DESC

## Installation

* clone this repository
* enter the working directory and type

```Shell
  npm install
```

* create a file called mite-config.json that has the following structure:

```JSON
    {
        "source": {
            "host": "URL TO YOUR SOURCE ACCOUNT",
            "apikey": "CORRESPONDING API KEY"
        },
        "destination": {
            "host": "URL TO YOUR DESTINATION ACCOUNT",
            "apikey": "CORRESPONDING API KEY"
        }
    }
```
  
like this example with invalid data, just to show how it should look like:

```JSON
    {
        "source": {
            "host": "URL TO YOUR SOURCE ACCOUNT",
            "apikey": "CORRESPONDING API KEY"
        },
        "destination": {
            "host": "URL TO YOUR DESTINATION ACCOUNT",
            "apikey": "CORRESPONDING API KEY"
        }
    }
```
  
