import { VueAnnouncerOptions } from './types';

export const draf = (cb: any) => requestAnimationFrame(() => requestAnimationFrame(cb))

export const isClient = typeof window !== 'undefined'

export const defaultOptions: VueAnnouncerOptions = {
  message: '',
  politeness: 'polite',
  routeComplement: 'has loaded',
  router: false
}