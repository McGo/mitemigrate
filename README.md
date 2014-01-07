# mitemigrate

## Description

migrate mite data from one account to another. The script will create all projects, clients and the corresponding time entries on the destination account that have also been entered on the source account. Because the [mite. API](http://mite.yo.lk/api/index.html) is not able to create or change users or services, we can only read those. During the migration process you have the chance to map existing users and entries to entities already created on your new account.

The migration will be done in three steps

### 1. Data extraction

The first step retrieves all project, client, user and service entries from the source account and stores it in a configuration file called migrate-config.json.

### 2. Configuration

You have to edit the migrate-config.json file in order to assign time entries to correct users and services. If you already have created clients or projects on your new account, you can define which the entries will be created from scratch and which one will be update or assigned to existing data in your new account.
This step is finished if you made the tool verify the configuration so that it can start the import. 

### 3. Data creation

In this step all time entries will be read from the source account and pushed into the destination. The definition from step two will be used and every change will be logged.

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
  
