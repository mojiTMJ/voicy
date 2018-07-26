// Dependencies
const { sendEngine } = require('../helpers/engine')
const { findChat } = require('../helpers/db')
const { checkAdminLock } = require('../helpers/admins')

/**
 * Setting up engine command
 * @param {Telegraf:Bot} bot Bot that should get engine setup
 */
function setupEngine(bot) {
  bot.command('engine', async (ctx) => {
    // Get chat
    const chat = await findChat(ctx.chat.id)
    // Check if admin locked
    const adminLockCheck = await checkAdminLock(chat, bot, ctx)
    if (!adminLockCheck) return
    // Respond
    sendEngine(ctx)
  })
}

// Exports
module.exports = {
  setupEngine,
}
