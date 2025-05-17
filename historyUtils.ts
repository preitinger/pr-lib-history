import * as rt from 'runtypes';

export interface HasType {
    type: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let HistState2: rt.Runtype.Core<HasType, any> = rt.Never;

/**
 * registers a history state runtype which is related to a specific route in the webapp.
 * All runtypes registered here are unified into a large union runtype.
 * This is used in the popstate event listener to know which state must be activated according to the history or popstate event.
 */
export function registerHistState<U>(histState2: rt.Runtype.Core<HasType, U>) {
    HistState2 = rt.Union(HistState2, histState2);
}


