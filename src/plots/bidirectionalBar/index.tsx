import React, { useImperativeHandle, forwardRef } from 'react';
import {
  BidirectionalBar as G2plotBidirectionalBar,
  BidirectionalBarOptions as G2plotConfig,
} from '@antv/g2plot';
import useChart from '../../hooks/useChart';
import { ContainerConfig } from '../../interface';
import { ErrorBoundary } from '../../base';
import ChartLoading from '../../util/createLoading';

export interface BidirectionalBarConfig extends G2plotConfig, ContainerConfig<G2plotConfig> {}

const BidirectionalBarChart = forwardRef((props: BidirectionalBarConfig, ref) => {
  const {
    style = {
      height: 'inherit',
    },
    className,
    loading,
    loadingTemplate,
    errorTemplate,
    ...rest
  } = props;
  const { chart, container } = useChart<G2plotBidirectionalBar, BidirectionalBarConfig>(
    G2plotBidirectionalBar,
    rest,
  );

  useImperativeHandle(ref, () => ({
    getChart: () => chart.current,
  }));
  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

export default BidirectionalBarChart;
