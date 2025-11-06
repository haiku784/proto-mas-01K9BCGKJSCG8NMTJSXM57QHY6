/* 
 * Integration Contracts for Proto MAS Runtime Backend
 * Generated from model_catalog and tool_adapter_catalog specifications
 */

import { ModelConfig, ModelGovernance } from './api-contracts';

/**
 * Represents configuration for Language Model Clients
 */
export interface LanguageModelClientConfig {
  provider: 'OpenAI' | 'Anthropic' | 'Google' | 'Cohere';
  model: string;
  temperature: number;
  max_tokens: number;
  use_case?: string;
}

/**
 * Represents an Embedding Model Configuration
 */
export interface EmbeddingModelConfig {
  provider: 'OpenAI' | 'Cohere';
  model: string;
  dimensions: number;
}

/**
 * Tool Adapter Integration Configuration
 */
export interface ToolAdapterConfig {
  name: string;
  adapter_type: 'webhook' | 'oauth2' | 'rest_api' | 'bot_framework';
  supported_actions: string[];
  integration_level?: 'basic' | 'deep';
}

/**
 * Adapter Configuration with Security and Rate Limiting
 */
export interface AdapterRuntimeConfig {
  security_profile: 'low' | 'medium' | 'high';
  rate_limiting: {
    requests_per_minute: number;
    concurrent_connections: number;
  };
  error_handling: {
    retry_strategy: 'exponential_backoff' | 'linear' | 'immediate';
    max_retries: number;
    logging_level: 'minimal' | 'standard' | 'detailed';
  };
}

/**
 * Comprehensive Tool Integration Specification
 */
export interface ToolIntegrationSpec {
  productivity_integrations: ToolAdapterConfig[];
  communication_adapters: ToolAdapterConfig[];
  development_tools: ToolAdapterConfig[];
  adapter_configuration: AdapterRuntimeConfig;
}

/**
 * Runtime Configuration for Multi-Agent System
 */
export interface MASRuntimeConfig {
  language_models: {
    task_creation_agent: LanguageModelClientConfig;
    task_priority_agent: LanguageModelClientConfig;
    project_management_agent: LanguageModelClientConfig;
  };
  embedding_models: {
    semantic_search: EmbeddingModelConfig;
    task_similarity: EmbeddingModelConfig;
  };
  model_governance: ModelGovernance;
  fallback_strategies: {
    primary_model_failure: string[];
  };
  tool_integrations: ToolIntegrationSpec;
}

/**
 * Represents a generic adapter action request
 */
export interface AdapterActionRequest {
  adapter_name: string;
  action: string;
  payload: Record<string, unknown>;
}

/**
 * Represents a generic adapter action response
 */
export interface AdapterActionResponse {
  success: boolean;
  data?: Record<string, unknown>;
  error?: string;
}
