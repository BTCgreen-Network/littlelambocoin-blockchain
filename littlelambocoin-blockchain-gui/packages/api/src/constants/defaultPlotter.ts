import PlotterName from './PlotterName';
import optionsForPlotter from '../utils/optionsForPlotter';
import defaultsForPlotter from '../utils/defaultsForPlotter';

export default {
  displayName: 'Littlelambocoin Proof of Space',
  options: optionsForPlotter(PlotterName.LITTLELAMBOCOINPOS),
  defaults: defaultsForPlotter(PlotterName.LITTLELAMBOCOINPOS),
  installInfo: { installed: true },
};
