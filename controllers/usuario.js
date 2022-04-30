
module.exports = app => {
    
    app.get('/api', (req,res) => {
        res.send('voce está na rota de Get da Api')
        
    })
    app.post('/api', (req,res) => {
        
        res.send('voce esta na rota de Post da Api')
    
    })
    
}