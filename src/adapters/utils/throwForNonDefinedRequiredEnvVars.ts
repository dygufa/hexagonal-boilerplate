const requiredEnvVarsInGeneral = [
    "SIMULATION_DATABASE_HOST",
    "SIMULATION_DATABASE_PORT",
    "SIMULATION_DATABASE_USERNAME",
    "SIMULATION_DATABASE_PASSWORD",
    "SIMULATION_DATABASE_DB",
];

const requiredEnvVarsInProd = [
    ...requiredEnvVarsInGeneral,
    "NEW_RELIC_APP_NAME",
    "NEW_RELIC_LICENSE_KEY",
];

export const throwForNonDefinedRequiredInGeneralEnvVars = () => {
    for (const requiredEnvVar of requiredEnvVarsInGeneral) {
        if (!process.env[requiredEnvVar]) {
            throw new Error(`Missing required environment variable: ${requiredEnvVar}`);
        }
    }
};

export const throwForNonDefinedRequiredInProductionEnvVars = () => {
    for (const requiredEnvVar of requiredEnvVarsInProd) {
        if (!process.env[requiredEnvVar]) {
            throw new Error(`Missing required environment variable: ${requiredEnvVar}`);
        }
    }
};
