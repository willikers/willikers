import { FormControl } from '@examples/forms/form-control.tsx';
import { FormGroup } from '@examples/forms/form-group.tsx';
import { FormValidators } from '@examples/forms/form-validators.tsx';
import { SelectNode } from '@examples/node/select-node.tsx';
import { AuditTime } from '@examples/rxjs/audit-time.tsx';
import { ThrottleTime } from '@examples/rxjs/throttle-time.tsx';
import { GlobalState } from '@examples/state/root-state.tsx';
import { Cookies } from '@examples/storage/cookies.tsx';
import { LocalStorage } from '@examples/storage/local-storage.tsx';
import { SessionStorage } from '@examples/storage/session-storage.tsx';
import { UrlHash } from '@examples/url/url-hash.tsx';
import { UrlHistory } from '@examples/url/url-history.tsx';
import { UrlPath } from '@examples/url/url-path.tsx';
import { UrlSearch } from '@examples/url/url-search-params.tsx';
import { createBrowserRouter } from 'react-router-dom';
import { App } from './App.tsx';
import { ClassList } from './examples/node/class-list.tsx';
import { DebounceTime } from './examples/rxjs/debounce-time.tsx';
import { Welcome } from './Welcome.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Welcome /> },
      // State hooks documentation
      { path: '/hook/state/root-state', element: <GlobalState /> },
      // RxJS hooks documentation
      { path: '/hook/rxjs/audit-time', element: <AuditTime /> },
      { path: '/hook/rxjs/debounce-time', element: <DebounceTime /> },
      { path: '/hook/rxjs/throttle-time', element: <ThrottleTime /> },
      // Node hooks documentation
      { path: '/hook/dom/class-list', element: <ClassList /> },
      { path: '/hook/dom/select-node', element: <SelectNode /> },
      // URL hooks documentation
      { path: '/hook/url/path/*', element: <UrlPath /> },
      { path: '/hook/url/history/*', element: <UrlHistory /> },
      { path: '/hook/url/search-params', element: <UrlSearch /> },
      { path: '/hook/url/hash', element: <UrlHash /> },
      // Storage hooks documentation
      { path: '/hook/storage/local-storage', element: <LocalStorage /> },
      { path: '/hook/storage/session-storage', element: <SessionStorage /> },
      { path: '/hook/storage/cookies', element: <Cookies /> },
      // Form hooks documentation
      { path: '/hook/forms/form-control', element: <FormControl /> },
      { path: '/hook/forms/form-group', element: <FormGroup /> },
      { path: '/hook/forms/form-validators', element: <FormValidators /> },
    ],
  },
]);
