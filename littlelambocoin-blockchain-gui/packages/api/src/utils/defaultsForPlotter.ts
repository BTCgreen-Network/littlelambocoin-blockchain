import { PlotterDefaults } from '../@types/Plotter';
import PlotterName from '../constants/PlotterName';
import { bladebitDefaults, bladebit2Defaults, madmaxDefaults, littlelambocoinposDefaults } from '../constants/Plotters';

export default function defaultsForPlotter(plotterName: PlotterName): PlotterDefaults {
  switch (plotterName) {
    case PlotterName.BLADEBIT:
      return bladebitDefaults;
    case PlotterName.BLADEBIT2:
      return bladebit2Defaults;
    case PlotterName.MADMAX:
      return madmaxDefaults;
    case PlotterName.LITTLELAMBOCOINPOS: // fallthrough
    default:
      return littlelambocoinposDefaults;
  }
}
