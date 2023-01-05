import { defineConfig } from 'vite';
export default defineConfig({
    test: {
        globals: true,
        environment: 'happy-dom',
        deps: {
            inline: true
        },
        coverage: {
            reporter: ['text', 'json', 'html'],
            cleanOnRerun: true,
            reportsDirectory: 'coverage'
        }
    }
});