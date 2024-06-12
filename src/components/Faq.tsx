import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

export default function Faq() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="mb-6 w-full pt-12 xl:mb-24">
          <h2 className="section-title mx-auto mb-12 text-center">
            Perguntas frequentes
          </h2>
          <div>
            <Accordion type="single" collapsible className="w-full space-y-6">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="ms-3 font-semibold md:text-xl">
                    01. Por que devo considerar contratar sua consultoria
                    empresarial em vez de tentar resolver os problemas
                    internamente?
                  </div>
                </AccordionTrigger>

                <AccordionContent className="font-normal md:text-lg">
                  Contratar nossa consultoria traz uma perspectiva externa e
                  imparcial para seus desafios empresariais. Nossa experiência e
                  conhecimento especializado nos permitem identificar
                  oportunidades de melhoria que podem não ser óbvias
                  internamente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="ms-3 font-semibold md:text-xl">
                    02. Como sua consultoria pode ajudar minha empresa a
                    melhorar sua eficiência e reduzir custos?
                  </div>
                </AccordionTrigger>

                <AccordionContent className="font-normal md:text-lg">
                  Nossa consultoria se concentra em metodologias comprovadas,
                  como Lean Manufacturing e Gestão Visual, que visam eliminar
                  desperdícios, otimizar processos e reduzir custos
                  operacionais, resultando em uma empresa mais eficiente e
                  lucrativa.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="ms-3 font-semibold md:text-xl">
                    03. Quais são os benefícios tangíveis que minha empresa pode
                    esperar ao contratar seus serviços?
                  </div>
                </AccordionTrigger>

                <AccordionContent className="font-normal md:text-lg">
                  Ao contratar nossos serviços, sua empresa pode esperar
                  benefícios como aumento da produtividade, melhoria da
                  qualidade do produto, redução de lead times, melhor utilização
                  de recursos e maior satisfação do cliente.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <div className="ms-3 font-semibold md:text-xl">
                    04. Como sua consultoria pode ajudar minha empresa a se
                    manter competitiva em um mercado em constante mudança?
                  </div>
                </AccordionTrigger>

                <AccordionContent className="font-normal md:text-lg">
                  Estamos comprometidos em ajudar sua empresa a se adaptar e
                  prosperar em um ambiente empresarial dinâmico. Nossa abordagem
                  baseada em melhores práticas e melhoria contínua ajuda a
                  manter sua empresa ágil, inovadora e competitiva.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  <div className="ms-3 font-semibold md:text-xl">
                    05. Como você personaliza suas soluções de consultoria para
                    atender às necessidades específicas da minha empresa?
                  </div>
                </AccordionTrigger>

                <AccordionContent className="font-normal md:text-lg">
                  Entendemos que cada empresa é única, por isso personalizamos
                  nossas soluções de consultoria de acordo com suas
                  necessidades, desafios e metas específicas. Trabalhamos em
                  estreita colaboração com sua equipe para desenvolver e
                  implementar estratégias sob medida que geram resultados
                  tangíveis.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  <div className="ms-3 font-semibold md:text-xl">
                    06. Quais são os resultados comprovados que sua consultoria
                    já alcançou para outras empresas?
                  </div>
                </AccordionTrigger>

                <AccordionContent className="font-light md:text-lg">
                  Temos um histórico comprovado de sucesso, ajudando empresas de
                  diversos setores a alcançar seus objetivos de melhoria
                  operacional e empresarial. Podemos compartilhar casos de
                  sucesso e referências de clientes satisfeitos que alcançaram
                  resultados significativos com nossa consultoria.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
