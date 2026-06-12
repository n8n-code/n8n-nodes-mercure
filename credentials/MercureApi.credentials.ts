import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class MercureApi implements ICredentialType {
        name = 'N8nDevMercureApi';

        displayName = 'Mercure API';

        icon: Icon = { light: 'file:../nodes/Mercure/mercure.svg', dark: 'file:../nodes/Mercure/mercure.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'http://mercure.local',
                        required: true,
                        placeholder: 'http://mercure.local',
                        description: 'The base URL of your Mercure API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
