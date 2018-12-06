/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('why-gqlify', this.props.language)}>
              Why GQLify
            </a>
            <a href={this.docUrl('intro', this.props.language)}>
              Quick Start
            </a>
            <a href={this.docUrl('data-model-overview', this.props.language)}>
              Data Model
            </a>
            <a href={this.docUrl('graphql-api-overview', this.props.language)}>
              GraphQL API
            </a>
            <a href={this.docUrl('data-source-overview', this.props.language)}>
              Data Source
            </a>
            <a href={this.docUrl('relationship-overview', this.props.language)}>
              Data Relationship
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://gitter.im/Canner/gqlify">Gitter Chat</a>
            <a
              href="https://twitter.com/cannerIO"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/canner/gqlify">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/canner/gqlify/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://www.canner.io"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`https://www.canner.io/img/logo-word-white.png`}
            alt="Facebook Open Source"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
