import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "@/components/layouts/Layout";
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { StateProvider } from '@/components/context/StateContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <Layout>
        <AnimatePresence>
          <LazyMotion features={domAnimation}>
              <Component {...pageProps} />
          </LazyMotion>
        </AnimatePresence>
      </Layout>
    </StateProvider>
  )
}
