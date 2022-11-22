import { PlotterOptions } from '../@types/Plotter';
import PlotterName from '../constants/PlotterName';
import { bladebitOptions, bladebit2Options, madmaxOptions, littlelambocoinposOptions } from '../constants/Plotters';

export default function optionsForPlotter(plotterName: PlotterName): PlotterOptions {
  switch (plotterName) {
    case PlotterName.BLADEBIT:
      return bladebitOptions;
    case PlotterName.BLADEBIT2:
      return bladebit2Options;
    case PlotterName.MADMAX:
      return madmaxOptions;
    case PlotterName.LITTLELAMBOCOINPOS: // fallthrough
    default:
      return littlelambocoinposOptions;
  }
}
