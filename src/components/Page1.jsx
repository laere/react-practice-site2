var React = require('react');


var Page1 = React.createClass({
    render: function() {
        return (
            <h1>Page 1</h1>
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

module.exports = Page1;
