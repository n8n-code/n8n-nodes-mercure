import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET Well Known Mercure",
					"value": "GET Well Known Mercure",
					"action": "Subscribe to updates",
					"description": "Subscribe to updates",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/.well-known/mercure"
						}
					}
				},
				{
					"name": "POST Well Known Mercure",
					"value": "POST Well Known Mercure",
					"action": "Publish an update",
					"description": "Publish an update",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/.well-known/mercure"
						}
					}
				},
				{
					"name": "GET Well Known Mercure Subscriptions",
					"value": "GET Well Known Mercure Subscriptions",
					"action": "Active subscriptions",
					"description": "Active subscriptions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/.well-known/mercure/subscriptions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /.well-known/mercure",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Well Known Mercure"
					]
				}
			}
		},
		{
			"displayName": "Topic",
			"name": "topic",
			"required": true,
			"description": "The topic to get updates from, can be a URI template (RFC6570).",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "topic",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Well Known Mercure"
					]
				}
			}
		},
		{
			"displayName": "Last Event ID",
			"name": "Last-Event-ID",
			"description": "The last received event id, to retrieve missed events.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Last-Event-ID",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Well Known Mercure"
					]
				}
			}
		},
		{
			"displayName": "Last Event ID",
			"name": "Last-Event-ID",
			"description": "The last received event id, to retrieve missed events, takes precedence over the query parameter.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Last-Event-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Well Known Mercure"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Preferred for server to server",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Well Known Mercure"
					]
				}
			}
		},
		{
			"displayName": "Cookie API Key",
			"name": "security_cookie",
			"type": "string",
			"default": "",
			"description": "Preferred for web browsers (the cookie name may change depending on the configuration)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Cookie": "={{ 'mercureAuthorization=' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Well Known Mercure"
					]
				}
			}
		},
		{
			"displayName": "POST /.well-known/mercure",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Well Known Mercure"
					]
				}
			}
		},
		{
			"displayName": "POST /.well-known/mercure<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Well Known Mercure"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Preferred for server to server",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Well Known Mercure"
					]
				}
			}
		},
		{
			"displayName": "Cookie API Key",
			"name": "security_cookie",
			"type": "string",
			"default": "",
			"description": "Preferred for web browsers (the cookie name may change depending on the configuration)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Cookie": "={{ 'mercureAuthorization=' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Well Known Mercure"
					]
				}
			}
		},
		{
			"displayName": "GET /.well-known/mercure/subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Well Known Mercure Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Preferred for server to server",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Well Known Mercure Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Cookie API Key",
			"name": "security_cookie",
			"type": "string",
			"default": "",
			"description": "Preferred for web browsers (the cookie name may change depending on the configuration)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Cookie": "={{ 'mercureAuthorization=' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Well Known Mercure Subscriptions"
					]
				}
			}
		},
];
