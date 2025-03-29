import TelegramBot from 'node-telegram-bot-api';
import { config } from '../config/env';
import { BotCommand, CommandResponse } from '../types';

class BotService {
  private bot: TelegramBot;
  private commands: BotCommand[];

  constructor() {
    this.bot = new TelegramBot(config.telegram.botToken, { polling: true });
    this.commands = [];
    this.initializeCommands();
    this.registerCommands();
  }

  private initializeCommands() {
    this.commands = [
      {
        command: 'ping',
        description: 'Check if bot is alive',
        handler: async (msg) => {
          await this.bot.sendMessage(msg.chat.id, 'pong');
        },
      },
      {
        command: 'start',
        description: 'Start with timestamp',
        handler: async (msg) => {
          const timestamp = new Date().toISOString();
          await this.bot.sendMessage(msg.chat.id, `started ${timestamp}`);
        },
      },
      {
        command: 'stop',
        description: 'Stop with number or timestamp',
        handler: async (msg, match) => {
          const params = match?.[1];
          if (params) {
            const number = parseInt(params.trim(), 10);
            if (!isNaN(number) && number >= 1 && number <= 604) {
              await this.bot.sendMessage(msg.chat.id, number.toString());
            } else {
              await this.bot.sendMessage(msg.chat.id, 'Invalid number. Please enter a number between 1 and 604.');
            }
          } else {
            const timestamp = new Date().toISOString();
            await this.bot.sendMessage(msg.chat.id, `stopped ${timestamp}`);
          }
        },
      },
      {
        command: 'khatam',
        description: 'Khatam with timestamp',
        handler: async (msg) => {
          const timestamp = new Date().toISOString();
          await this.bot.sendMessage(msg.chat.id, `khatam ${timestamp}`);
        },
      },
      {
        command: 'set',
        description: 'Set name and numbers',
        handler: async (msg, match) => {
          const params = match?.[1];
          if (!params) {
            await this.bot.sendMessage(msg.chat.id, 'Please provide a name (alphabets only)');
            return;
          }

          const name = params.trim();
          if (!/^[A-Za-z]+$/.test(name)) {
            await this.bot.sendMessage(msg.chat.id, 'Name must contain only alphabets');
            return;
          }

          // Store the name temporarily and ask for first number
          await this.bot.sendMessage(msg.chat.id, `Enter first number (1-30) for ${name}`);
          // Note: In a real implementation, we'd need to store the state and handle the response
        },
      },
    ];
  }

  private registerCommands() {
    this.commands.forEach((command) => {
      this.bot.onText(new RegExp(`^/${command.command}(?:\\s+(.+))?$`), command.handler);
    });

    // Register bot commands with Telegram
    this.bot.setMyCommands(
      this.commands.map(({ command, description }) => ({
        command,
        description,
      }))
    );
  }

  public getBot(): TelegramBot {
    return this.bot;
  }
}

export default new BotService(); 