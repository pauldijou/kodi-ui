import React from 'react';
import { Link } from 'react-router';

export default ()=> <div id='menu'>
  <h2>Kodi UI</h2>
  <Link to='/'>Home</Link>
  <Link to='/addons'>Addons</Link>
  <Link to='/application'>Application</Link>
  <Link to='/audio'>Audio Library</Link>
  <Link to='/files'>Files</Link>
  <Link to='/gui'>GUI</Link>
  <Link to='/input'>Input</Link>
  <Link to='/jsonrpc'>JSON RPC</Link>
  <Link to='/kodi'>Kodi</Link>
  <Link to='/player'>Player</Link>
  <Link to='/playlist'>Playlist</Link>
  <Link to='/pvr'>PVR</Link>
  <Link to='/system'>System</Link>
  <Link to='/video'>Video Library</Link>
  <Link to='/settings'>Settings</Link>
</div>
