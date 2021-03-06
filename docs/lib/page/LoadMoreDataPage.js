import React from 'react';

import { TypeChooser } from 'react-stockcharts/lib/helper';

import { ContentSection } from 'lib/ContentSection';
import { Row } from 'lib/Row';
import { Section } from 'lib/Section';

import { CandleStickChartPanToLoadMore } from 'lib/charts/CandleStickChartPanToLoadMore';

class LoadMoreDataPage extends React.Component {
  render() {
    return (
      <ContentSection title={LoadMoreDataPage.title}>
        <Row>
          <Section colSpan={2}>
            <TypeChooser>
              {(type) => (
                <CandleStickChartPanToLoadMore
                  data={this.props.someData}
                  type={type}
                />
              )}
            </TypeChooser>
          </Section>
        </Row>
        <Row>
          <Section colSpan={2}>
            <aside
              dangerouslySetInnerHTML={{
                __html: require('md/LOAD-ON-PAN'),
              }}></aside>
          </Section>
        </Row>
      </ContentSection>
    );
  }
}

LoadMoreDataPage.title = 'Load more data on pan';

export { LoadMoreDataPage };
