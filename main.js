const { createDirs } from './bot/cogs/modules/create_dirs';
const { createFlags } from './bot/cogs/modules/create_flags';
const { conn } = require('./bot/cogs/modules/database');
const { fixBins, fixCompradas } = require('./bot/cogs/modules/patch_fix');

async function main() {
    createDirs(['temp', 'config/cert']);
    createFlags();
    await fixBins();
    await fixCompradas();
}

function run() {
    main().catch(e => {
        console.error(`Error: ${e.message}\n\nBot closed!`);
        conn.close();
    });
}

process.on('SIGINT', () => {
    console.log('Bot closed by user!');
    conn.close();
    process.exit();
});

run();
