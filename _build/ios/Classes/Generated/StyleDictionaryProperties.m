
//
// StyleDictionaryProperties.m
//

// Do not edit directly
// Generated on Sat, 28 May 2022 16:19:03 GMT


#import "StyleDictionaryProperties.h"

@implementation StyleDictionaryProperties

+ (NSDictionary *)getProperty:(NSString *)keyPath {
  return [[self properties] valueForKeyPath:keyPath];
}

+ (nonnull)getValue:(NSString *)keyPath {
  return [[self properties] valueForKeyPath:[NSString stringWithFormat:@"%@.value", keyPath]];
}

+ (NSDictionary *)properties {
  static NSDictionary * dictionary;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    dictionary = @{
  @"1_brand": @{
    @"white": @{
      @"value": #ffffff,
      @"name": @"StyleDictionary1BrandWhite",
      @"category": @"1_brand",
      @"type": @"white"
      },
    @"black": @{
      @"value": #111111,
      @"name": @"StyleDictionary1BrandBlack",
      @"category": @"1_brand",
      @"type": @"black"
      },
    @"gray": @{
      @"value": #dddddd,
      @"name": @"StyleDictionary1BrandGray",
      @"category": @"1_brand",
      @"type": @"gray"
      },
    @"blue": @{
      @"value": #0366d6,
      @"name": @"StyleDictionary1BrandBlue",
      @"category": @"1_brand",
      @"type": @"blue"
      }
    },
  @"2_base": @{
    @"white100": @{
      @"value": #ffffff,
      @"name": @"StyleDictionary2BaseWhite100",
      @"category": @"2_base",
      @"type": @"white100"
      },
    @"black100": @{
      @"value": #111111,
      @"name": @"StyleDictionary2BaseBlack100",
      @"category": @"2_base",
      @"type": @"black100"
      },
    @"gray100": @{
      @"value": #dddddd,
      @"name": @"StyleDictionary2BaseGray100",
      @"category": @"2_base",
      @"type": @"gray100"
      },
    @"blue100": @{
      @"value": #0366d6,
      @"name": @"StyleDictionary2BaseBlue100",
      @"category": @"2_base",
      @"type": @"blue100"
      }
    },
  @"fontFamilies": @{
    @"apple-sd-gothic-neo": @{
      @"value": Apple SD Gothic Neo,
      @"name": @"StyleDictionaryFontFamiliesAppleSdGothicNeo",
      @"category": @"fontFamilies",
      @"type": @"apple-sd-gothic-neo"
      }
    },
  @"lineHeights": @{
    @"0": @{
      @"value": AUTO,
      @"name": @"StyleDictionaryLineHeights0",
      @"category": @"lineHeights",
      @"type": @"0"
      },
    @"1": @{
      @"value": 24,
      @"name": @"StyleDictionaryLineHeights1",
      @"category": @"lineHeights",
      @"type": @"1"
      }
    },
  @"fontWeights": @{
    @"apple-sd-gothic-neo-0": @{
      @"value": Bold,
      @"name": @"StyleDictionaryFontWeightsAppleSdGothicNeo0",
      @"category": @"fontWeights",
      @"type": @"apple-sd-gothic-neo-0"
      }
    },
  @"fontSize": @{
    @"0": @{
      @"value": 11,
      @"name": @"StyleDictionaryFontSize0",
      @"category": @"fontSize",
      @"type": @"0"
      },
    @"1": @{
      @"value": 12,
      @"name": @"StyleDictionaryFontSize1",
      @"category": @"fontSize",
      @"type": @"1"
      }
    },
  @"letterSpacing": @{
    @"0": @{
      @"value": 0,
      @"name": @"StyleDictionaryLetterSpacing0",
      @"category": @"letterSpacing",
      @"type": @"0"
      }
    },
  @"paragraphSpacing": @{
    @"0": @{
      @"value": 0,
      @"name": @"StyleDictionaryParagraphSpacing0",
      @"category": @"paragraphSpacing",
      @"type": @"0"
      }
    },
  @"web": @{
    @"mac": @{
      @"h1": @{
        @"value": [object Object],
        @"name": @"StyleDictionaryWebMacH1",
        @"category": @"web",
        @"type": @"mac",
        @"item": @"h1"
        }
      }
    },
  @"mobile": @{
    @"iOS": @{
      @"h1": @{
        @"value": [object Object],
        @"name": @"StyleDictionaryMobileIOsH1",
        @"category": @"mobile",
        @"type": @"iOS",
        @"item": @"h1"
        }
      }
    },
  @"textCase": @{
    @"none": @{
      @"value": none,
      @"name": @"StyleDictionaryTextCaseNone",
      @"category": @"textCase",
      @"type": @"none"
      }
    },
  @"textDecoration": @{
    @"none": @{
      @"value": none,
      @"name": @"StyleDictionaryTextDecorationNone",
      @"category": @"textDecoration",
      @"type": @"none"
      }
    }
  };
  });

  return dictionary;
}

@end


