import { Echo } from '@novu/echo';

export const echo = new Echo({
    /**
     * This will be needed when you want to sync your work.
     * Find your API-Key here: https://web.novu.co/settings
     */
    apiKey: '375ba111413fe0901a74316bc90efe36',
    /**
     * Enable this flag only during local development
     */
    devModeBypassAuthentication: process.env.NODE_ENV === 'development'
});

echo.workflow('hello-world', async ({ step }) => {
    await step.email('send-email', async (inputs) => {
        return {
            subject: "This is an email subject",
            body: "E-mail body of hello " + inputs.world
        }
    }, {
        inputSchema: {
            type: 'object', properties: { world: { type: 'string', default: 'World' }}
        }
    });

    await step.email('send-action', async (inputs) => {
        return {
            subject: "This is an email subject",
            body: "E-mail body of hello " + inputs.world
        }
    }, {
        inputSchema: {
            type: 'object', properties: { world: { type: 'string', default: 'World' }}
        }
    });
}, { payloadSchema: { type: 'object', properties: {} }});


echo.workflow('hello-actions', async ({ step }) => {
    await step.email('send-email', async (inputs) => {
        return {
            subject: "This is an email subject",
            body: "E-mail body of hello " + inputs.world
        }
    }, {
        inputSchema: {
            type: 'object', properties: { world: { type: 'string', default: 'World' }}
        }
    });
}, { payloadSchema: { type: 'object', properties: {} }});
