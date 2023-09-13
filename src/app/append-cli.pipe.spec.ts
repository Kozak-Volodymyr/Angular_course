import { AppendCLIPipe } from './pipes/append-cli.pipe';

describe('AppendCLIPipe', () => {
  it('create an instance', () => {
    const pipe = new AppendCLIPipe();
    expect(pipe).toBeTruthy();
  });
});
