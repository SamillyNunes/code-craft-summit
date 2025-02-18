import { Button } from "@/components/button";
import { IconButton } from "@/components/icon_button";
import { Input } from "@/components/input";
import { ArrowRight, CopyIcon } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Button >
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <CopyIcon />
      </IconButton>

      <div>
        <Input type="email" placeholder="Digite seu e-mail" />
      </div>
    </main>
  );
}
