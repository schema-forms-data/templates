// ============================================
// TemplateContext — CSS vars + config provider
// ============================================

import React, { createContext, useContext } from "react";
import type { FormTemplateConfig } from "@schema-forms-data/core";
import { getTemplateConfig } from "./templateRegistry";

const TemplateContext = createContext<FormTemplateConfig>(
  getTemplateConfig("moderno"),
);

interface TemplateProviderProps {
  config: FormTemplateConfig;
  children: React.ReactNode;
  /** Se true (padrão), injeta as CSS vars num wrapper div */
  renderWrapper?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const TemplateProvider = ({
  config,
  children,
  renderWrapper = true,
  className,
  style,
}: TemplateProviderProps) => {
  const cssVars: React.CSSProperties = {
    "--t-primary": config.colors.primary,
    "--t-primary-hover": config.colors.primaryHover,
    "--t-accent": config.colors.accent,
    "--t-bg": config.colors.background,
    "--t-surface": config.colors.surface,
    "--t-text": config.colors.text,
    "--t-text-muted": config.colors.textMuted,
    "--t-border": config.colors.border,
    "--t-error": config.colors.error,
    ...style,
  } as React.CSSProperties;

  if (!renderWrapper) {
    return (
      <TemplateContext.Provider value={config}>
        {children}
      </TemplateContext.Provider>
    );
  }

  return (
    <TemplateContext.Provider value={config}>
      <div className={className} style={cssVars} data-template="1">
        {children}
      </div>
    </TemplateContext.Provider>
  );
};

export const useTemplate = (): FormTemplateConfig =>
  useContext(TemplateContext);
