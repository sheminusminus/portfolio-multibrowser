import classie from './classie';


describe('utils > classie', () => {
  it('works with arrays', () => {
    expect(classie(['classA', 'classB'])).toEqual('classA classB');
  });

  it('works with objects', () => {
    expect(classie({ classA: true, classB: false })).toEqual('classA');
  });

  it('works with string arguments', () => {
    expect(classie('classA', 'classB')).toEqual('classA classB');
  });

  it('works with mixed argument types', () => {
    expect(classie(['classA', 'classB'], 'classC', { classD: true, classE: false}))
      .toEqual('classA classB classC classD');
  });
});
