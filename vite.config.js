import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  plugins: [react(), tailwindcss() ,  ],
  resolve: {
    alias: {
      'react-beautiful-dnd': 'react-beautiful-dnd/dist/react-beautiful-dnd.min.js',
    },
  },
});
