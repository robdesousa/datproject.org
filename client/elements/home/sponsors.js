const html = require('choo/html')
const css = require('sheetify')

module.exports = function (props) {
  const elCss = css`
    :host {
    }
  `

  return html`
    <section class="${props.klass} ${elCss}">
      <header>
        <h2 class="f2 mb0">Sponsors and Supporters</h2>
        <p class="f4 mt1 color-neutral-70 horizontal-rule">Dat is developed by the non-profit group Code for Science & Society and supported by generous sponsors.</p>
      </header>
      <div class="pt3 flex flex-wrap w-100">
        <a class="w-100 w-auto-ns inline-flex items-center mv2 mh3" href="https://codeforscience.org/" title="Code for Science and Society">
          <img class="h4 w-auto" src="/img/codeforscience.png" alt="Code for Science and Society">
        </a>
        <a class="inline-flex items-center mv2 mh3" href="https://sloan.org/programs/digital-technology/data-and-computational-research" title="Dat Project Grant - Alfred P. Sloan Foundation">
          <img class="h3 w-auto" src="/img/sloan.png" alt="Alfred P. Sloan Foundation">
        </a>
        <a class="inline-flex items-center mv2 mh3" href="https://www.knightfoundation.org/grants/201346305/" title="Dat Project Grant - John S. and James L. Knight Foundation">
          <img class="h3 w-auto"  src="/img/knight.png" alt="John S. and James L. Knight Foundation">
        </a>
        <a class="inline-flex items-center mv2 mh3" href="https://www.moore.org/" title="Gordon and Betty Moore Foundation">
          <img class="h3 w-auto" src="/img/moore.png" alt="Gordon and Betty Moore Foundation">
        </a>
      </div>
      <div class="pv3">
        <div class="br1 ba b--green bg-white">
          <div class="dt-ns dt--fixed-ns w-100">
            <div class="pa3 pa4-ns dtc-ns v-mid">
              <div>
                <h2 class="fw4 f3 mt0 mb3">We need your support!</h2>
                <p class="black-70 measure lh-copy mv0">
                  You help make Dat Project a success.
                  Donations help sustain Dat Project & allow us to spend more time with our community.
                </p>
              </div>
            </div>
            <div class="pa3 pa4-ns dtc-ns v-mid">
              ${props.cta}
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
