import defaultsForPlotter from '../utils/defaultsForPlotter';
import optionsForPlotter from '../utils/optionsForPlotter';
import PlotterName from './PlotterName';

export default {
  displayName: 'Littlelambocoin Proof of Space',
  options: optionsForPlotter(PlotterName.LITTLELAMBOCOINPOS),
  defaults: defaultsForPlotter(PlotterName.LITTLELAMBOCOINPOS),
  installInfo: { installed: true },
};
