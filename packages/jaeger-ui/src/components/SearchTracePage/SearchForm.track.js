// @flow

// Copyright (c) 2017 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type { Store } from 'redux';
import { trackEvent } from '../../utils/tracking';

export const CATEGORY_BASE = 'jaeger/ux/trace/search';
export const CATEGORY_SORTBY = `${CATEGORY_BASE}/sortby`;
export const FORM_CHANGE_ACTION_TYPE = '@@redux-form/CHANGE';

export const middlewareHooks = {
  [FORM_CHANGE_ACTION_TYPE]: (store: Store, action: any) => {
    if (action.meta.form === 'sortBy') {
      trackEvent(CATEGORY_SORTBY, action.payload);
    }
  },
};
