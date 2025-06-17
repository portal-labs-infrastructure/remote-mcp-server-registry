export interface DiscoverableMcpServer {
  id: string;
  name: string;
  description?: string;
  category: string;
  mcp_url: string;
  authentication_types: string[];
  dynamic_client_registration?: boolean;
  documentation_url?: string;
  maintainer_name: string;
  maintainer_url: string;
  icon_url?: string;
  is_official?: boolean;
}
