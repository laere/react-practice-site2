var React = require('react');

var PageContent = React.createClass({

    render: function() {

        return (
          <article className="articles">
            <section>
              <h1 className="header">ARTICLE HEADER</h1>
              <h3>Article sub header!!</h3>
              <p>TextTextTextTextTextTextTextTextText</p>
            </section>
          </article>
        );
    }
});

module.exports = PageContent;
