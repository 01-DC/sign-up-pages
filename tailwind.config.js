/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable spaced-comment */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modals/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    outline: {
      none: 'none',
    },

    extend: {
      spacing: {
        3.8: '0.9375rem',
        1.3: '0.3125rem',
        18: '4.5rem',
      },

      screens: {
        sm: '512px',
        md: '770px',
        xl: '1350px',
        ////////////
        'lg-max': { max: '1024px' },
        'md-max': { max: '768px' },
        'sm-mid-tablet': { max: '640px' },
        'sm-mid-max': { max: '425px' },
        'sm-max': { max: '375px' },
        'xs-max': { max: '325px' },
        'modal-sm-range': { min: '426px', max: '768px' },

        // landing-page
        'mid-lg': { max: '990px' },
      },

      fontSize: {
        xsm: '0.8125rem',
        ///////////
        'font-progress-btn': '13.3333px',
        'level-badge-fs': '14px',
        'trending-title-font': '0.8125rem',
      },

      lineHeight: {
        6.8: '1.4rem',
        default: '130%',
        ///////////
        'status-description': '1.4rem',
        'level-badge-lh': '24px',
        'modal-75': '0.075em',

        // landing-page
        'leading-first': '64px',
        'leading-nav': '1.6em',
      },

      padding: {
        'progress-card': '33.6px',
        'status-padding': '10px',
        'pt-post': '1.7rem',
        'pr-post': '1.5rem',
        'pl-post': '1.85rem',
        'pb-post': '1.23rem',
        'pb-progress-btn': '0.4rem',
        'trending-title-padding': '20px',

        // landing-page
        'starting-text': '30%',
      },

      colors: {
        blueGrey: colors.blueGray,
        'nav-active': '#fff9fa',
        border: '#dadada',
        light: '#666',
        lighter: '#a6a6a6',
        highlight: '#25b2aa',
        skeleton: '#e9ecef',
        post: '#29253d',
        hover: '#fafafa',
        'btn-green': '#c9f270',
        'btn-green-hover': '#daf996',
        'signup-blue': '#1a73e8',
        'focus-cyan': '#48ccac',
        ///////////////////////
        'progress-btn': '#01a3a4',
        'main-container': '#fafafa',
        'level-badge': 'rgba(188,235,233,.4)',
        'post-description': '#29253d',
        like: '#f73859',
        'quick-apply': '#c9f270',
        'quick-apply-hover': '#cff184bd',
        'card-border': '#ebedf1',
        'trending-title': '#d9d9d9',
        'trending-title-hover': '#f4f1f1',
        'modal-color': '#f2f2f2',
        'modal-text-color': '#0e0e0e',
        'modal-text-color-secondary': '#666',
        'modal-main-hr': '#c4c4c4',
        about: 'rgba(0, 0, 0, 0.87)',

        // landing-page
        '#f9fafb': '#f9fafb',
        '#333333': '#333333',
        '#283338': '#283338',
        '#0dbd8b': '#0dbd8b',
        '#626262': '#626262',
        '#fffaf5': '#fffaf5',

        //schedule-demo
        '#e6f2ff': '#e6f2ff',
        '#54a9ea': '#54a9ea',
        '#1986ce': '#1986ce',
        '#0089ff': '#0089ff',
        '#7bc3ff': '#7bc3ff',
        '#f4f8ff': '#f4f8ff',
        '#accff0': '#accff0',
        '#d3e8fc': '#d3e8fc',
      },

      fontFamily: {
        Roboto: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },

      minHeight: {
        198: '198px',
        'feed-card--content-container': '6.25rem',
        'feed-card__image': '5.625rem',

        // landing-page
        'nav-button': '38px',
        'company-images': '30px',

        // schedule-demo
        'height-demo': '488px',
      },

      maxHeight: {
        85: '21.875rem',
        /////////////
        // landing-page
        'company-images': '45px',
      },

      minWidth: {
        'feed-card__image': '5.625rem',
        'side-container': '18.6rem',

        // landing-page
        'company-images': '100px',

        //schedule-demo
        '1/3': '33.333333%',
      },

      maxWidth: {
        container: '62.5rem',
        '1.8xl': '40rem',
        /////////////////////
        modal: '75%',
        'post-max-width': '40rem',

        // landing-page
        navbar: '1200px',
        'company-images': '150px',
        'company-images-block': '70%',
        'opportunities-block': '850px',
      },

      width: {
        main: 'calc(100% - 260px)',
        70: '17.5rem',
        65: '16.25rem',
        44.2: '11.25rem',
        80.1: '20.938rem',
        /////////////////
        '36/25': '12%',
        'progress-card-width': '59.825rem',
        'feed-card__image': '5.625rem',
        'dual-column-layout__left': '70%',
        'dual-column-layout__right': '30%',
        'progress-bar': '15%',
        'progress-width': '120px',
        'side-container-width': '18.6rem',
        'xs-modal': '90%',
        'sm-modal': '84%',
        'lg-modal': '86%',

        // landing-page
        'footer-width': '1200px',
        'starting-para': '620px',

        //schedule-demo
        'demo-width': '52rem',
      },

      borderRadius: {
        '4xl': '50px',
      },

      height: {
        min: 'min-content',
        '11/12': '91%',
        //////////////
        'vh-80': '80vh',
        'feed-card__image': '5.625rem',
        modal: 'calc(100vh - 4.5rem)',
        'progress-height': '120px',
        'xs-dialog-content-height': '315px',
        'sm-dialog-content-height': 'calc(100vh - 20rem)',
        'md-dialog-content-height': 'calc(100vh - 19rem)',

        // landing-page
        'background-photo': '92vh',
        'desktop-img-height': '420px',

        //schedule-demo
        'demo-height': '70%',
      },

      inset: {
        'xs-modal': 'calc(15%  - 2rem)',
        'sm-modal': 'calc(15% - 1.5rem)',
        'sm-mid-modal': 'calc(15% - 2rem)',
        'md-modal': '5rem',
        'lg-modal': 'calc(20% - 7rem);',
        'mid-range': 'calc(10% - 10px)',

        // landing-page
        'desktop-img': 'calc(100vw - 50%)',
      },

      backgroundPosition: {
        100: '100%',
      },

      marginLeft: {
        'section-card--header': '1%',
      },

      animation: {
        appear: 'appear 350ms ease-out 0ms',
        fadeUp: 'fadeUp 250ms linear 0ms',
        slideLeft: 'slideLeft 300ms ease-out 0ms',
      },

      keyframes: {
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },

        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(13px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        slideLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(380px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
