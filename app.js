const db = require('./config/database')

async function testarconexcao() {
    try{
        await db.authenticate();
        console.log('CONEXSAO LEGADKJSVBASOPIFHCBUISDCVOCBSDVBKSNCVJKSDKJÇAKHJJKVASUDYV.NWhklds')
    } catch(e){
        console.log('DAKBSFHJ')
    }
    
}

testarconexcao()