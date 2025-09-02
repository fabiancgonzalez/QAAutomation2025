const { merge } = require('mochawesome-merge')
const generator = require('mochawesome-report-generator')

async function generateReport() {
    const jsonReport = await merge({
        files: ['./cypress/reports/mochawesome/*.json']
    })
    
    await generator.create(jsonReport, {
        reportDir: './cypress/reports/html',
        reportTitle: 'Cypress Test Results',
        charts: true
    })
}

generateReport()