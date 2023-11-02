export default {
  extends: ['stylelint-config-standard', 'stylelint-config-html'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'selector-class-pattern': '.+',
    'custom-property-pattern': '.+',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'color-function-notation': [
      'modern',
      {
        ignore: ['with-var-inside']
      }
    ],
    'media-feature-range-notation': 'prefix',
    'rule-empty-line-before': [
      'always',
      {
        except: ['inside-block', 'after-single-line-comment']
      }
    ],
    'custom-property-empty-line-before': null,
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands']
      }
    ],
    'order/order': [
      // 'custom-properties',
      'dollar-variables',
      {
        type: 'at-rule',
        name: 'extend'
      },
      {
        type: 'at-rule',
        name: 'include'
      },
      {
        type: 'at-rule',
        name: 'mixin'
      },
      'declarations',
      'rules',
      /*
      {
        type: 'at-rule',
        name: 'media'
      },
      */
      {
        type: 'at-rule',
        name: 'supports'
      }
    ],
    'order/properties-order': [
      {
        groupName: 'positioning',
        properties: ['position', 'top', 'right', 'bottom', 'left', 'z-index']
      },
      {
        groupName: 'display and visibility',
        properties: ['display', 'visibility', 'opacity', 'vertical-align']
      },
      {
        groupName: 'spacing',
        properties: ['margin', 'padding']
      },
      {
        groupName: 'background',
        properties: [
          'background',
          'background-color',
          'background-image',
          'background-repeat',
          'background-position',
          'background-size',
          'background-attachment'
        ]
      },
      {
        groupName: 'border',
        properties: ['border', 'border-width', 'border-style', 'border-color', 'border-radius']
      },
      {
        groupName: 'typography',
        properties: [
          'color',
          'font',
          'font-family',
          'font-size',
          'font-weight',
          'line-height',
          'text-align',
          'text-decoration',
          'text-transform',
          'white-space',
          'word-break'
        ]
      },
      'alphabetical'
    ]
  }
};
