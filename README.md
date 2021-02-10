# pg-uuid-shortener
Postgres UUID Shortener

# Examples

```javascript
const shortener = require('pg-uuid-shortener');

let encoded = shortener.encode("a0ee-bc99-9c0b-4ef8-bb6d-6bb9-bd38-0a11");
let decoded = shortener.decode("SQf1faXLb8A9DieWmarM8Ma1");

console.log("ENCODE: " + encoded); //SQf1faXLb8A9DieWmarM8Ma1
console.log("DECODED: " + decoded); //a0eebc999c0b4ef8bb6d6bb9bd380a11
```