import { Echo } from '@novu/echo';
import { renderReactEmail } from '@/app/echo/react-email';

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
            body: renderReactEmail(inputs)
        }
    }, {
        inputSchema: {
            type: "object",
            properties: {
                showJoinButton: { type: "boolean", default: true },
                username: { type: "string", default: "alanturing" },
                userImage: {
                    type: "string",
                    default:
                        "https://react-email-demo-bdj5iju9r-resend.vercel.app/static/vercel-user.png",
                    format: "uri",
                },
                invitedByUsername: { type: "string", default: "Alan" },
                invitedByEmail: {
                    type: "string",
                    default: "alan.turing@example.com",
                    format: "email",
                },
                teamName: { type: "string", default: "Team Awesome" },
                teamImage: {
                    type: "string",
                    default:
                        "https://react-email-demo-bdj5iju9r-resend.vercel.app/static/vercel-team.png",
                    format: "uri",
                },
                inviteLink: {
                    type: "string",
                    default: "https://vercel.com/teams/invite/foo",
                    format: "uri",
                },
                inviteFromIp: { type: "string", default: "204.13.186.218" },
                inviteFromLocation: {
                    type: "string",
                    default: "São Paulo, Brazil",
                },
            },
        },
    });
}, { payloadSchema: { type: 'object', properties: {} }});

