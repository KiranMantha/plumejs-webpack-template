import { defineConfig } from 'vite';
export default defineConfig({
    test: {
        globals: true,
        environment: 'happy-dom',
        deps: {
            inline: true
        },
        coverage: {
            include: ['src/**'],
            provider: 'istanbul',
            reporter: ['text', 'json', 'html'],
            cleanOnRerun: true,
            reportsDirectory: 'coverage'
        }
    }
});