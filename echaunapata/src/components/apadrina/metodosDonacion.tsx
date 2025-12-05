import {
  CreditCard,
  Smartphone,
  DollarSign,
  Mail,
} from "lucide-react";
import CardBank from "./cardBank";
import CardOther from "./cardOther";

const accentColor = "#8B3A3A";

export default function MetodosDonacion() {
  return (
    <section className="w-full py-14 px-6" >
      <div className="max-w-6xl mx-auto">
        {/* TÍTULO */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-10"
          style={{ color: "#6B2E2E" }}
        >
          Métodos de Donación
        </h2>

        {/* GRID BANCOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardBank
            title="Banco Agrícola"
            account="300-588898-3"
            extra="Desde USA Agrícola: 3110189991"
            link="https://www.bancoagricola.com/"
          />

          <CardBank
            title="Banco Promerica"
            account="1-0000009004482"
            link="https://www.promerica.com.sv/"
          />

          <CardBank
            title="Davivienda"
            account="777-54-01842-97"
            link="https://www.davivienda.com.sv/"
          />

          <CardBank
            title="Banco Cuscatlán"
            account="2540025013"
            link="https://www.bancocuscatlan.com/"
          />

          <CardBank
            title="Caja de Crédito San Miguel"
            account="13-03-0031988-5"
            link="https://www.fedecredito.com.sv/"
          />

          <CardBank
            title="BAC Credomatic"
            account="120541156"
            link="https://www.baccredomatic.com/es-sv"
          />

          <CardBank
            title="Wells Fargo"
            account="6944928834"
            link="https://www.wellsfargo.com/"
          />

          <CardBank
            title="Tigo Money"
            icon={<Smartphone color={accentColor} />}
            account="7681-1886"
            link="https://www.tigo.com.sv/tigo-money"
          />
        </div>

        {/* INTERNACIONALES */}
        <div className="mt-14">
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#6B2E2E" }}>
            Transferencias Internacionales
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardOther
              title="Western Union"
              name="SILVIA BEATRIZ AYALA DE AYALA"
              icon={<DollarSign color={accentColor} />}
              link="https://www.westernunion.com/"
            />

            <CardOther
              title="Zelle / Venmo / CashApp"
              email="ECHAMEUNAPATAELSALVADOR@GMAIL.COM"
              icon={<CreditCard color={accentColor} />}
              link="https://www.zellepay.com/"
            />

            <CardOther
              title="PayPal"
              email="ECHAME1PATASV@GMAIL.COM"
              icon={<Mail color={accentColor} />}
              link="https://www.paypal.com/paypalme/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
