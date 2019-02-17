export const data = [
  {
    title: "Svensk författningssamling",
    example: "SFS 1915:218 / AvtL / avtalslagen",
    fields: [
      {
        label: "nr/namn/förkortning",
        type: "text"
      },
      {
        label: "kap",
        type: "number"
      },
      {
        label: "paragraf",
        type: "number"
      }
    ],
    abbreviation: "SFS"
  },
  {
    title: "Svensk författningssamling i tryckt format (PDF)",
    example: "SFS 2009:254",
    fields: [
      {
        label: "nr",
        type: "text"
      }
    ],
    abbreviation: "SFS"
  },
  {
    title: "Högsta domstolen, Referat i NJA I",
    example: "NJA 1970 s. 1",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "sida",
        type: "number",
        sperator: "s."
      }
    ],
    abbreviation: "NJA"
  },
  {
    title: "Hovrätterna, referat",
    example: "RH 2004:5",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "nr",
        type: "number",
        sperator: ":"
      }
    ],
    abbreviation: "RH"
  },
  {
    title: "Högsta förvaltningsdomstolen, referat",
    example: "HFD 2011 not. 1",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "notis",
        type: "number",
        sperator: "not."
      }
    ],
    abbreviation: "HFD"
  },
  {
    title: "Högsta förvaltningsdomstolen, notiser",
    example: "RÅ 1998 ref. 1",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "ref",
        type: "number",
        sperator: "ref."
      }
    ],
    abbreviation: "RÅ"
  },
  {
    title: "Regeringsrätten, referat 1986–2010",
    example: "RÅ 1978 1:10",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "avd",
        type: "number",
        sperator: ":"
      }
    ],
    abbreviation: "RÅ"
  },
  {
    title: "Regeringsrätten, referat 1978–1985",
    example: "RÅ 1998 ref. 1",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "ref",
        type: "number",
        sperator: "ref."
      }
    ],
    abbreviation: "RÅ"
  },
  {
    title: "Regeringsrätten, referat 1930–1977",
    example: "RÅ 2004 not. 5",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "notis",
        type: "number",
        sperator: "not."
      }
    ],
    abbreviation: "RÅ"
  },
  {
    title: "Regeringsrätten, notiser 1986–2010",
    example: "RÅ 2004 not. 6",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "notis",
        type: "number",
        sperator: "not."
      }
    ],
    abbreviation: "RÅ"
  },
  {
    title: "Regeringsrätten, notiser 1975–1985",
    example: "RÅ 1979 Aa 1",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "avd",
        type: "number"
      },
      {
        label: "nr",
        type: "number",
        sperator: ":"
      }
    ],
    abbreviation: "RÅ"
  },
  {
    title: "Arbetsdomstolens domar, referat",
    example: "AD 1998 nr 12",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "nr",
        type: "number",
        sperator: ":"
      }
    ],
    abbreviation: "AD"
  },
  {
    title: "Marknadsdomstolens avgöranden",
    example: "MD 2002:1",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "nr",
        type: "number",
        sperator: ":"
      }
    ],
    abbreviation: "MD"
  },
  {
    title: "Mark- och miljööverdomstolens avgöranden",
    example: "MÖD 2005:2",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "nr",
        type: "number",
        sperator: ":"
      }
    ],
    abbreviation: "MÖD"
  },
  {
    title: "Migrationsöverdomstolens avgöranden",
    example: "MIG 2006:1",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "nr",
        type: "number",
        sperator: ":"
      }
    ],
    abbreviation: "MIG"
  },
  {
    title: "Propositioner 1975/76–",
    example: "Prop. 1998/99:3 2",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "år",
        type: "number",
        sperator: "/"
      },
      {
        label: "nr",
        type: "number",
        sperator: ":"
      },
      {
        label: "sida",
        type: "number",
        sperator: "s."
      }
    ],
    abbreviation: "Prop."
  },
  {
    title: "Propositioner 1975 och tidigare",
    example: "Prop. 1975:89",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "nr",
        type: "number",
        sperator: ":"
      }
    ],
    abbreviation: "Prop."
  },
  {
    title: "Nytt juridiskt arkiv II (NJA II)",
    example: "NJA II 2007 s. 3",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "sida",
        type: "number",
        sperator: "s."
      }
    ],
    abbreviation: "NJA II"
  },
  {
    title: "Prop. noterade i NJA II 1975/76–",
    example: "Prop. 2004/05:13",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "år",
        type: "number",
        sperator: "/"
      },
      {
        label: "nr",
        type: "number",
        sperator: ":"
      },
      {
        label: "sida",
        type: "number",
        sperator: "s."
      }
    ],
    abbreviation: "Prop."
  },
  {
    title: "Prop. noterade i NJA II 1975 och tidigare",
    example: "1969:128",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "nr",
        type: "number",
        sperator: ":"
      }
    ],
    abbreviation: " "
  },
  {
    title: "Beslut från Justitieombudsmannen",
    example: "JO 2003/04 s. 396",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "nr",
        type: "number",
        sperator: "/"
      },
      {
        label: "sida",
        type: "number",
        sperator: "s."
      }
    ],
    abbreviation: "JO"
  },
  {
    title: "Beslut från Justitiekanslern",
    example: "JK 1934-06-40",
    fields: [
      {
        label: "nr",
        type: "number"
      },
      {
        label: " ",
        type: "number",
        sperator: "-"
      },
      {
        label: " ",
        type: "number",
        sperator: "-"
      }
    ],
    abbreviation: "JK"
  },
  {
    title: "Svensk Juristtidning",
    example: "SvJT 2011 s 1",
    fields: [
      {
        label: "år",
        type: "number"
      },
      {
        label: "sida",
        type: "number",
        sperator: "s."
      }
    ],
    abbreviation: "SvJT"
  }
];
