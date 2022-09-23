(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    './.storybook/preview.js-generated-config-entry.js': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, 'globalTypes', function () {
          return globalTypes;
        }),
        __webpack_require__.d(preview_namespaceObject, 'parameters', function () {
          return parameters;
        }),
        __webpack_require__.d(preview_namespaceObject, 'decorators', function () {
          return decorators;
        });
      __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.filter.js'),
        __webpack_require__(
          '../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.get-own-property-descriptor.js',
        ),
        __webpack_require__(
          '../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.for-each.js',
        ),
        __webpack_require__(
          '../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/web.dom-collections.for-each.js',
        ),
        __webpack_require__(
          '../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.get-own-property-descriptors.js',
        ),
        __webpack_require__(
          '../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.define-properties.js',
        ),
        __webpack_require__(
          '../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.define-property.js',
        );
      var _templateObject,
        ClientApi = __webpack_require__(
          '../../node_modules/.pnpm/@storybook+client-api@6.5.12_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/client-api/dist/esm/ClientApi.js',
        ),
        styled_components_browser_esm =
          (__webpack_require__('../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js'),
          __webpack_require__(
            '../../node_modules/.pnpm/styled-components@5.3.5_7i5myeigehqah43i5u7wbekgba/node_modules/styled-components/dist/styled-components.browser.esm.js',
          ));
      __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.slice.js');
      var styles_GlobalStyle = Object(styled_components_browser_esm.b)(function (_ref) {
          var theme = _ref.theme;
          return Object(styled_components_browser_esm.c)(
            _templateObject ||
              (_templateObject = (function _taggedTemplateLiteralLoose(strings, raw) {
                return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
              })([
                '\n    html,\n    body {\n      margin: 0;\n      padding: 0;\n      font-family: sans-serif;\n      background-color: ',
                ';\n    }\n    a {\n      color: inherit;\n      text-decoration: none;\n    }\n    * {\n      box-sizing: border-box;\n    }\n  ',
              ])),
            theme.colors.background,
          );
        }),
        palette = {
          primary: { light: '#c046d3', main: '#B118C8', dark: '#7b108c' },
          secondary: { light: '#374766', main: '#061a40', dark: '#04122c' },
        },
        modeToColors = {
          light: {
            palette: palette,
            background: '#fff',
            surface: '#fafafa',
            onPrimary: '#fff',
            onSecondary: '#fff',
            onVariant: '#fff',
            onBackground: '#000',
            onSurface: '#000',
            tooltip: { background: '#1e1e1e', onBackground: '#fff' },
            border: { main: '#b8c2ca', hovered: '#000', focused: palette.primary.main },
            variants: {
              success: { main: '#4CAF50', background: '#edf7ed', onBackground: '#1e4620' },
              info: { main: '#03A9F4', background: '#e5f6fd', onBackground: '#014361' },
              warning: { main: '#FF9800', background: '#fff4e5', onBackground: '#663C00' },
              error: { main: '#EF5350', background: '#fdeded', onBackground: '#5F2120' },
            },
          },
          dark: {
            palette: palette,
            background: '#121212',
            surface: '#222222',
            onPrimary: '#fff',
            onSecondary: '#fff',
            onVariant: '#fff',
            onBackground: '#fff',
            onSurface: '#fff',
            tooltip: { background: '#e3e3e3', onBackground: '#000' },
            border: { main: '#b8c2ca', hovered: '#fff', focused: palette.primary.main },
            variants: {
              success: { main: '#66bb6a', background: '#0c130d', onBackground: '#cce8cd' },
              info: { main: '#29b6f6', background: '#071318', onBackground: '#b8e7fb' },
              warning: { main: '#ffa726', background: '#191207', onBackground: '#ffe2b7' },
              error: { main: '#f44336', background: '#160b0b', onBackground: '#f4c7c7' },
            },
          },
        },
        styles_spacing = {
          xxs: '.25rem',
          xs: '.5rem',
          s: '.75rem',
          m: '1rem',
          l: '1.5rem',
          xl: '2.25rem',
          container: '75rem',
          input: '1.5rem',
          tooltip: '7.5rem',
        },
        styled_theming = __webpack_require__(
          '../../node_modules/.pnpm/styled-theming@2.2.0/node_modules/styled-theming/index.js',
        );
      __webpack_require__.n(styled_theming)()('font', {
        sansSerif: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        serif: 'Georgia, Times, "Times New Roman", serif',
        monoSpaced: 'Consolas, monaco, monospace',
      });
      var styles_fonts = {
        sizes: { xxs: '.625rem', xs: '.75rem', s: '.875rem', m: '1rem', l: '1.5rem', xl: '2.25rem', xxl: '3rem' },
        weights: { light: '300', regular: '400', medium: '500', semiBold: '600', bold: '700', bolder: '800' },
        emphasis: { high: 0.87, medium: 0.6, disabled: 0.38 },
      };
      var jsx_runtime = __webpack_require__('../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js'),
        globalTypes = {
          theme: {
            name: 'Theme',
            description: 'Global theme for components',
            defaultValue: 'dark',
            toolbar: { icon: 'circlehollow', items: ['light', 'dark'], showName: !0, dynamicTitle: !0 },
          },
        },
        parameters = {
          actions: { argTypesRegex: '^on[A-Z].*' },
          controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
          darkMode: { current: 'dark' },
        };
      function withThemeProvider(Story, context) {
        var theme = (function getTheme(mode) {
          return { mode: mode, colors: modeToColors[mode], spacing: styles_spacing, fonts: styles_fonts };
        })(context.globals.theme);
        return Object(jsx_runtime.jsx)(styled_components_browser_esm.a, {
          theme: theme,
          children: Object(jsx_runtime.jsx)(Story, {}),
        });
      }
      withThemeProvider.displayName = 'withThemeProvider';
      var decorators = [
        function withGlobalStyle(Story) {
          return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [Object(jsx_runtime.jsx)(styles_GlobalStyle, {}), Object(jsx_runtime.jsx)(Story, {})],
          });
        },
        withThemeProvider,
      ];
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
            return Object(ClientApi.d)(value);
          case 'argTypes':
            return Object(ClientApi.b)(value);
          case 'decorators':
            return value.forEach(function (decorator) {
              return Object(ClientApi.f)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return Object(ClientApi.g)(loader, !1);
            });
          case 'parameters':
            return Object(ClientApi.h)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                      });
                }
                return target;
              })({}, value),
              !1,
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return Object(ClientApi.c)(enhancer);
            });
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return Object(ClientApi.e)(enhancer);
            });
          case 'render':
            return Object(ClientApi.i)(value);
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), Object(ClientApi.h)(v, !1);
          case '__namedExportsOrder':
          case 'decorateStory':
          case 'renderToDOM':
            return null;
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    './components sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])__stories__[\\\\/](?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(mdx|tsx))$':
      function (module, exports, __webpack_require__) {
        var map = {
          './data/__stories__/Tooltip.stories.tsx': './components/data/__stories__/Tooltip.stories.tsx',
          './inputs/__stories__/Button.stories.tsx': './components/inputs/__stories__/Button.stories.tsx',
          './typography/__stories__/Body1.stories.tsx': './components/typography/__stories__/Body1.stories.tsx',
          './typography/__stories__/Header1.stories.tsx': './components/typography/__stories__/Header1.stories.tsx',
          './typography/__stories__/Header2.stories.tsx': './components/typography/__stories__/Header2.stories.tsx',
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './components sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])__stories__[\\\\/](?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(mdx|tsx))$');
      },
    './components/data/Tooltip.tsx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Tooltip;
      });
      __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__('../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js');
      var _templateObject,
        _templateObject2,
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../../node_modules/.pnpm/styled-components@5.3.5_7i5myeigehqah43i5u7wbekgba/node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        _typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/typography/index.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      function _taggedTemplateLiteralLoose(strings, raw) {
        return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
      }
      function Tooltip(_ref) {
        var children = _ref.children,
          title = _ref.title;
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(TooltipContainer, {
          children: [
            children,
            Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TooltipText, { children: title }),
          ],
        });
      }
      Tooltip.displayName = 'Tooltip';
      var TooltipText = styled_components__WEBPACK_IMPORTED_MODULE_2__.d.span(function (_ref2) {
          var theme = _ref2.theme;
          return Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(
            _templateObject ||
              (_templateObject = _taggedTemplateLiteralLoose([
                '\n    ',
                ';\n    visibility: hidden;\n    min-width: ',
                ';\n    background-color: ',
                ';\n    color: ',
                ';\n    font-size: ',
                ';\n    text-align: center;\n    padding: ',
                ';\n    border-radius: ',
                ';\n    margin-top: ',
                ';\n    transform: translateX(-50%);\n    left: 50%;\n\n    position: absolute;\n    z-index: 1;\n  ',
              ])),
            _typography__WEBPACK_IMPORTED_MODULE_3__.b,
            theme.spacing.tooltip,
            theme.colors.tooltip.background,
            theme.colors.tooltip.onBackground,
            theme.fonts.sizes.xs,
            theme.spacing.xxs,
            theme.spacing.xxs,
            theme.spacing.xs,
          );
        }),
        TooltipContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__.d.div(
          _templateObject2 ||
            (_templateObject2 = _taggedTemplateLiteralLoose([
              '\n  position: relative;\n  display: inline-block;\n\n  &:hover ',
              ' {\n    visibility: visible;\n  }\n',
            ])),
          TooltipText,
        );
      try {
        (Tooltip.displayName = 'Tooltip'),
          (Tooltip.__docgenInfo = {
            description: '',
            displayName: 'Tooltip',
            props: {
              title: { defaultValue: null, description: '', name: 'title', required: !0, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/data/Tooltip.tsx#Tooltip'] = {
              docgenInfo: Tooltip.__docgenInfo,
              name: 'Tooltip',
              path: 'components/data/Tooltip.tsx#Tooltip',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/data/__stories__/Tooltip.stories.tsx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Basic', function () {
          return Basic;
        });
      __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js');
      var _typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/typography/index.tsx'),
        _Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./components/data/Tooltip.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        ),
        config = { title: 'Data/Tooltip', component: _Tooltip__WEBPACK_IMPORTED_MODULE_4__.a };
      function Template(props) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
          _Tooltip__WEBPACK_IMPORTED_MODULE_4__.a,
          Object.assign({}, props),
        );
      }
      Template.displayName = 'Template';
      var Basic = Template.bind({});
      (Basic.args = {
        title: 'This appears in the tooltip!',
        children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
          _typography__WEBPACK_IMPORTED_MODULE_3__.a,
          { children: 'Hover me!' },
        ),
      }),
        (__webpack_exports__.default = config);
    },
    './components/inputs/__stories__/Button.stories.tsx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Contained', function () {
          return Contained;
        }),
        __webpack_require__.d(__webpack_exports__, 'Outlined', function () {
          return Outlined;
        }),
        __webpack_require__.d(__webpack_exports__, 'Text', function () {
          return Text;
        }),
        __webpack_require__.d(__webpack_exports__, 'Disabled', function () {
          return Disabled;
        }),
        __webpack_require__.d(__webpack_exports__, 'WithTooltip', function () {
          return WithTooltip;
        });
      __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.function.bind.js');
      var react = __webpack_require__('../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js'),
        styled_components_browser_esm =
          (__webpack_require__(
            '../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.keys.js',
          ),
          __webpack_require__(
            '../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.index-of.js',
          ),
          __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.slice.js'),
          __webpack_require__(
            '../../node_modules/.pnpm/styled-components@5.3.5_7i5myeigehqah43i5u7wbekgba/node_modules/styled-components/dist/styled-components.browser.esm.js',
          )),
        data_Tooltip = __webpack_require__('./components/data/Tooltip.tsx');
      try {
        (Tooltip.displayName = 'Tooltip'),
          (Tooltip.__docgenInfo = {
            description: '',
            displayName: 'Tooltip',
            props: {
              title: { defaultValue: null, description: '', name: 'title', required: !0, type: { name: 'string' } },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/data/index.tsx#Tooltip'] = {
              docgenInfo: Tooltip.__docgenInfo,
              name: 'Tooltip',
              path: 'components/data/index.tsx#Tooltip',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _templateObject,
        _templateObject2,
        jsx_runtime = __webpack_require__('../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js'),
        _excluded = ['children', 'tooltipText', 'disabled', 'type', 'variant'];
      function _taggedTemplateLiteralLoose(strings, raw) {
        return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]));
        }
        return target;
      }
      var Button = react.forwardRef(function (_ref, ref) {
          var children = _ref.children,
            tooltipText = _ref.tooltipText,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            _ref$type = _ref.type,
            type = void 0 === _ref$type ? 'button' : _ref$type,
            _ref$variant = _ref.variant,
            variant = void 0 === _ref$variant ? 'outlined' : _ref$variant,
            props = _objectWithoutProperties(_ref, _excluded),
            inner = Object(jsx_runtime.jsx)('div', {
              children: Object(jsx_runtime.jsx)(
                StyledButton,
                Object.assign({ $variant: variant, type: type, disabled: disabled, ref: ref }, props, {
                  children: children,
                }),
              ),
            });
          return tooltipText ? Object(jsx_runtime.jsx)(data_Tooltip.a, { title: tooltipText, children: inner }) : inner;
        }),
        ButtonTypography = Object(styled_components_browser_esm.c)(function (_ref2) {
          var theme = _ref2.theme;
          return Object(styled_components_browser_esm.c)(
            _templateObject ||
              (_templateObject = _taggedTemplateLiteralLoose([
                '\n    font-family: sans-serif;\n    font-weight: ',
                ';\n    font-size: ',
                ';\n    text-transform: uppercase;\n    line-height: 1.75;\n  ',
              ])),
            theme.fonts.weights.regular,
            theme.fonts.sizes.s,
          );
        }),
        variantToStyles = {
          text: function text(_) {
            return '';
          },
          contained: function contained(theme) {
            return (
              '\n    color: ' +
              theme.colors.onPrimary +
              ';\n    background-color: ' +
              theme.colors.palette.primary.main +
              ';\n    \n    :hover {\n      background-color: ' +
              theme.colors.palette.primary.light +
              ';\n    }\n  '
            );
          },
          outlined: function outlined(theme) {
            return (
              '\n    border: 1px solid ' +
              theme.colors.palette.primary.main +
              ';\n\n    :hover {\n      background-color: ' +
              theme.colors.surface +
              ';\n    }\n  '
            );
          },
        },
        StyledButton = styled_components_browser_esm.d.button(function (_ref3) {
          var $variant = _ref3.$variant,
            theme = _ref3.theme,
            disabled = _ref3.disabled;
          return Object(styled_components_browser_esm.c)(
            _templateObject2 ||
              (_templateObject2 = _taggedTemplateLiteralLoose([
                '\n    ',
                ';\n\n    display: flex;\n    border-radius: ',
                ';\n    cursor: pointer;\n    padding: ',
                ' ',
                ';\n    outline: 0;\n    border: 0;\n    color: ',
                ';\n    background-color: transparent;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n\n    ',
                '\n\n    ',
                '\n  ',
              ])),
            ButtonTypography,
            theme.spacing.xxs,
            theme.spacing.xxs,
            theme.spacing.xs,
            theme.colors.palette.primary.main,
            variantToStyles[$variant](theme),
            disabled && '\n    cursor: not-allowed;\n  ',
          );
        });
      try {
        (Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              tooltipText: {
                defaultValue: null,
                description: '',
                name: 'tooltipText',
                required: !1,
                type: { name: 'string' },
              },
              variant: {
                defaultValue: { value: 'outlined' },
                description: '',
                name: 'variant',
                required: !1,
                type: { name: 'enum', value: [{ value: '"contained"' }, { value: '"outlined"' }, { value: '"text"' }] },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/inputs/Button.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'components/inputs/Button.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var config = { title: 'Inputs/Button', component: Button, argTypes: { onClick: { action: 'clicked' } } };
      function Template(props) {
        return Object(jsx_runtime.jsx)(Button, Object.assign({}, props));
      }
      Template.displayName = 'Template';
      var Contained = Template.bind({});
      Contained.args = { children: 'Button text', variant: 'contained' };
      var Outlined = Template.bind({});
      Outlined.args = { children: 'Button text', variant: 'outlined' };
      var Text = Template.bind({});
      Text.args = { children: 'Button text', variant: 'text' };
      var Disabled = Template.bind({});
      Disabled.args = { children: 'Button text', disabled: !0 };
      var WithTooltip = Template.bind({});
      WithTooltip.args = { tooltipText: 'This appears in the tooltip!', children: 'Button text' };
      __webpack_exports__.default = config;
    },
    './components/typography/Body1.tsx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Body1;
      });
      __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.slice.js');
      var _templateObject,
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/styled-components@5.3.5_7i5myeigehqah43i5u7wbekgba/node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./components/typography/Typography.tsx');
      var Body1 = styled_components__WEBPACK_IMPORTED_MODULE_1__.d.span(
        _templateObject ||
          (_templateObject = (function _taggedTemplateLiteralLoose(strings, raw) {
            return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
          })(['\n  ', ';\n'])),
        _Typography__WEBPACK_IMPORTED_MODULE_2__.a,
      );
      try {
        (Body1.displayName = 'Body1'),
          (Body1.__docgenInfo = {
            description: '',
            displayName: 'Body1',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: { name: '((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null' },
              },
              theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'any' } },
              as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'undefined' } },
              forwardedAs: {
                defaultValue: null,
                description: '',
                name: 'forwardedAs',
                required: !1,
                type: { name: 'undefined' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/typography/Body1.tsx#Body1'] = {
              docgenInfo: Body1.__docgenInfo,
              name: 'Body1',
              path: 'components/typography/Body1.tsx#Body1',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/typography/Header1.tsx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Header1;
      });
      __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.slice.js');
      var _templateObject,
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/styled-components@5.3.5_7i5myeigehqah43i5u7wbekgba/node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./components/typography/Typography.tsx');
      var Header1 = styled_components__WEBPACK_IMPORTED_MODULE_1__.d.h1(function (_ref) {
        var theme = _ref.theme;
        return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(
          _templateObject ||
            (_templateObject = (function _taggedTemplateLiteralLoose(strings, raw) {
              return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
            })(['\n    ', ';\n\n    font-size: ', ';\n  '])),
          _Typography__WEBPACK_IMPORTED_MODULE_2__.a,
          theme.fonts.sizes.xxl,
        );
      });
      try {
        (Header1.displayName = 'Header1'),
          (Header1.__docgenInfo = {
            description: '',
            displayName: 'Header1',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLHeadingElement | null) => void) | RefObject<HTMLHeadingElement> | null',
                },
              },
              theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'any' } },
              as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'undefined' } },
              forwardedAs: {
                defaultValue: null,
                description: '',
                name: 'forwardedAs',
                required: !1,
                type: { name: 'undefined' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/typography/Header1.tsx#Header1'] = {
              docgenInfo: Header1.__docgenInfo,
              name: 'Header1',
              path: 'components/typography/Header1.tsx#Header1',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/typography/Header2.tsx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Header2;
      });
      __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.slice.js');
      var _templateObject,
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/styled-components@5.3.5_7i5myeigehqah43i5u7wbekgba/node_modules/styled-components/dist/styled-components.browser.esm.js',
        ),
        _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__('./components/typography/Typography.tsx');
      var Header2 = styled_components__WEBPACK_IMPORTED_MODULE_1__.d.h2(function (_ref) {
        var theme = _ref.theme;
        return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(
          _templateObject ||
            (_templateObject = (function _taggedTemplateLiteralLoose(strings, raw) {
              return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
            })(['\n    ', ';\n\n    font-size: ', ';\n  '])),
          _Typography__WEBPACK_IMPORTED_MODULE_2__.a,
          theme.fonts.sizes.xl,
        );
      });
      try {
        (Header2.displayName = 'Header2'),
          (Header2.__docgenInfo = {
            description: '',
            displayName: 'Header2',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLHeadingElement | null) => void) | RefObject<HTMLHeadingElement> | null',
                },
              },
              theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'any' } },
              as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'undefined' } },
              forwardedAs: {
                defaultValue: null,
                description: '',
                name: 'forwardedAs',
                required: !1,
                type: { name: 'undefined' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/typography/Header2.tsx#Header2'] = {
              docgenInfo: Header2.__docgenInfo,
              name: 'Header2',
              path: 'components/typography/Header2.tsx#Header2',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './components/typography/Typography.tsx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Typography;
      });
      __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.array.slice.js');
      var _templateObject,
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../../node_modules/.pnpm/styled-components@5.3.5_7i5myeigehqah43i5u7wbekgba/node_modules/styled-components/dist/styled-components.browser.esm.js',
        );
      var Typography = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(function (_ref) {
        var theme = _ref.theme;
        return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(
          _templateObject ||
            (_templateObject = (function _taggedTemplateLiteralLoose(strings, raw) {
              return raw || (raw = strings.slice(0)), (strings.raw = raw), strings;
            })([
              '\n    margin: 0;\n    font-family: sans-serif;\n    font-weight: ',
              ';\n    font-size: ',
              ';\n    color: ',
              ';\n    opacity: ',
              ';\n  ',
            ])),
          theme.fonts.weights.regular,
          theme.fonts.sizes.m,
          theme.colors.onBackground,
          theme.fonts.emphasis.high,
        );
      });
    },
    './components/typography/__stories__/Body1.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Basic', function () {
          return Basic;
        });
      __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js');
      var _Body1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/typography/Body1.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      var config = { title: 'Typography/Body1', component: _Body1__WEBPACK_IMPORTED_MODULE_3__.a };
      function Template(_ref) {
        var args = _extends({}, _ref);
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _Body1__WEBPACK_IMPORTED_MODULE_3__.a,
          Object.assign({}, args),
        );
      }
      Template.displayName = 'Template';
      var Basic = Template.bind({});
      (Basic.args = { children: 'Body 1' }), (__webpack_exports__.default = config);
    },
    './components/typography/__stories__/Header1.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Basic', function () {
          return Basic;
        });
      __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js');
      var _Header1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/typography/Header1.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      var config = { title: 'Typography/Header1', component: _Header1__WEBPACK_IMPORTED_MODULE_3__.a };
      function Template(_ref) {
        var args = _extends({}, _ref);
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _Header1__WEBPACK_IMPORTED_MODULE_3__.a,
          Object.assign({}, args),
        );
      }
      Template.displayName = 'Template';
      var Basic = Template.bind({});
      (Basic.args = { children: 'Header 1' }), (__webpack_exports__.default = config);
    },
    './components/typography/__stories__/Header2.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Basic', function () {
          return Basic;
        });
      __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('../../node_modules/.pnpm/core-js@3.25.2/node_modules/core-js/modules/es.function.bind.js'),
        __webpack_require__('../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js');
      var _Header2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/typography/Header2.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          '../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
        );
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      var config = { title: 'Typography/Header2', component: _Header2__WEBPACK_IMPORTED_MODULE_3__.a };
      function Template(_ref) {
        var args = _extends({}, _ref);
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _Header2__WEBPACK_IMPORTED_MODULE_3__.a,
          Object.assign({}, args),
        );
      }
      Template.displayName = 'Template';
      var Basic = Template.bind({});
      (Basic.args = { children: 'Header 2' }), (__webpack_exports__.default = config);
    },
    './components/typography/index.tsx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _Body1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./components/typography/Body1.tsx');
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return _Body1__WEBPACK_IMPORTED_MODULE_0__.a;
      });
      __webpack_require__('./components/typography/Header1.tsx'),
        __webpack_require__('./components/typography/Header2.tsx');
      var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__('./components/typography/Typography.tsx');
      __webpack_require__.d(__webpack_exports__, 'b', function () {
        return _Typography__WEBPACK_IMPORTED_MODULE_3__.a;
      });
      try {
        (Body1.displayName = 'Body1'),
          (Body1.__docgenInfo = {
            description: '',
            displayName: 'Body1',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: { name: '((instance: HTMLSpanElement | null) => void) | RefObject<HTMLSpanElement> | null' },
              },
              theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'any' } },
              as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'undefined' } },
              forwardedAs: {
                defaultValue: null,
                description: '',
                name: 'forwardedAs',
                required: !1,
                type: { name: 'undefined' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/typography/index.tsx#Body1'] = {
              docgenInfo: Body1.__docgenInfo,
              name: 'Body1',
              path: 'components/typography/index.tsx#Body1',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Header1.displayName = 'Header1'),
          (Header1.__docgenInfo = {
            description: '',
            displayName: 'Header1',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLHeadingElement | null) => void) | RefObject<HTMLHeadingElement> | null',
                },
              },
              theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'any' } },
              as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'undefined' } },
              forwardedAs: {
                defaultValue: null,
                description: '',
                name: 'forwardedAs',
                required: !1,
                type: { name: 'undefined' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/typography/index.tsx#Header1'] = {
              docgenInfo: Header1.__docgenInfo,
              name: 'Header1',
              path: 'components/typography/index.tsx#Header1',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Header2.displayName = 'Header2'),
          (Header2.__docgenInfo = {
            description: '',
            displayName: 'Header2',
            props: {
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: {
                  name: '((instance: HTMLHeadingElement | null) => void) | RefObject<HTMLHeadingElement> | null',
                },
              },
              theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'any' } },
              as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'undefined' } },
              forwardedAs: {
                defaultValue: null,
                description: '',
                name: 'forwardedAs',
                required: !1,
                type: { name: 'undefined' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['components/typography/index.tsx#Header2'] = {
              docgenInfo: Header2.__docgenInfo,
              name: 'Header2',
              path: 'components/typography/index.tsx#Header2',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './generated-stories-entry.js': function (module, exports, __webpack_require__) {
      'use strict';
      (function (module) {
        (0,
        __webpack_require__(
          '../../node_modules/.pnpm/@storybook+react@6.5.12_tyklhqqtbjrtigqxoqzujoezca/node_modules/@storybook/react/dist/esm/client/index.js',
        ).configure)(
          [
            __webpack_require__(
              './components sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])__stories__[\\\\/](?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(mdx|tsx))$',
            ),
          ],
          module,
          !1,
        );
      }.call(
        this,
        __webpack_require__('../../node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/buildin/module.js')(module),
      ));
    },
    './storybook-init-framework-entry.js': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(
        '../../node_modules/.pnpm/@storybook+react@6.5.12_tyklhqqtbjrtigqxoqzujoezca/node_modules/@storybook/react/dist/esm/client/index.js',
      );
    },
    0: function (module, exports, __webpack_require__) {
      __webpack_require__(
        '../../node_modules/.pnpm/@storybook+core-client@6.5.12_gb7obzxizvrzrpjapgh6fkjruy/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js',
      ),
        __webpack_require__(
          '../../node_modules/.pnpm/@storybook+core-client@6.5.12_gb7obzxizvrzrpjapgh6fkjruy/node_modules/@storybook/core-client/dist/esm/globals/globals.js',
        ),
        __webpack_require__('./storybook-init-framework-entry.js'),
        __webpack_require__(
          '../../node_modules/.pnpm/@storybook+react@6.5.12_tyklhqqtbjrtigqxoqzujoezca/node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js',
        ),
        __webpack_require__(
          '../../node_modules/.pnpm/@storybook+react@6.5.12_tyklhqqtbjrtigqxoqzujoezca/node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js',
        ),
        __webpack_require__(
          '../../node_modules/.pnpm/@storybook+addon-docs@6.5.12_3glaga62vdbhn3j2rgi6hqvhay/node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js',
        ),
        __webpack_require__(
          '../../node_modules/.pnpm/@storybook+addon-actions@6.5.12_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js',
        ),
        __webpack_require__(
          '../../node_modules/.pnpm/@storybook+addon-backgrounds@6.5.12_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js',
        ),
        __webpack_require__(
          '../../node_modules/.pnpm/@storybook+addon-measure@6.5.12_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js',
        ),
        __webpack_require__(
          '../../node_modules/.pnpm/@storybook+addon-outline@6.5.12_biqbaboplfbrettd7655fr4n2y/node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js',
        ),
        __webpack_require__('./.storybook/preview.js-generated-config-entry.js'),
        (module.exports = __webpack_require__('./generated-stories-entry.js'));
    },
    1: function (module, exports) {},
  },
  [[0, 5, 6]],
]);
