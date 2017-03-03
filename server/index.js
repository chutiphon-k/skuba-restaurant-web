import express from 'express'
import mqtt from 'mqtt'
import config from './config'

let state = {
	lumyai: {
		status: ''
	},
	turtle: {
		status: ''
	},
	orderA: [],
	orderB: [],
	orderC: []
}


const client  = mqtt.connect(config.mqtt)
const app = express()

const PORT = process.env.PORT || config.server.port

const server = app.listen(PORT, () => {
  console.log('Production Express server API running at localhost:' + PORT)
})

const io = require('socket.io').listen(server)

client.on('connect', () => {
	client.subscribe('/ROBOT')
})

client.on('message', (topic, payload) => {
	let msg =  JSON.parse(payload.toString())
	console.log(msg)
	io.emit('data', msg)
})

app.get('*', (req, res) => {
  res.send('ITimer API')
})