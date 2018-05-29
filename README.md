# LogFunc


# Indexes

## Event

    * Event index was created to bear all logs from event created by user as clicking in a product, 
         create an order or left the chat.

## Business 

    * Business index







#### Formatter

```node

    > const msg = {
    ...     date: '1265121',
    ...     kind: 'INFO',
    ...     stage:  'DEV',
    ...     eventType: 'event',
    ...     docType: 'bot',
    ...     transactionID: '19726172sjadnh227836',
    ...     metadata: {'a': 1}
    ... };

    > F.message(msg)
    { date: '1265121',
    kind: 'INFO',
    stage: 'DEV',
    eventType: 'event',
    docType: 'bot',
    transactionID: '19726172sjadnh227836',
    a: 1 }

```
