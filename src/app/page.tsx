import Button from "@/components/button";
import IconButton from "@/components/icon_button";
import { ArrowRight, CopyIcon } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Button >
        Enviar
        <ArrowRight/>
      </Button>

      <IconButton>
        <CopyIcon/>
      </IconButton>
    </main>
  );
}
