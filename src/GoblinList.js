import React from 'react';
import Goblin from './Goblin';

export default function GoblinList({ goblins, handleDeleteGoblin }) {
  return (
    <div className='goblin-list quarter'>
      {/* map over your goblins and render out a Goblin component for each goblin. You've seen this before. The only difference here is that you need to pass handleDeleteGoblin (a prop that is a function), as well */}
      {goblins.map((goblin, i) => <Goblin key={goblin + i} goblin={goblin} handleDeleteGoblin={handleDeleteGoblin}/>)}
    </div>
  );
}
