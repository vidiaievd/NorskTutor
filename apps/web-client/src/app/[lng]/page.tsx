import { Button } from '@nx-shadcn-ui';
import { ModeToggle } from '../../components/switch-theme-button';

export default function Page() {
  return (
    <>
    <div className="bg-indigo-500 p-2 font-mono">
      <Button>Click me!</Button>
    </div>
      <Button>Click me!</Button>
      <ModeToggle />
      </>
  );
}